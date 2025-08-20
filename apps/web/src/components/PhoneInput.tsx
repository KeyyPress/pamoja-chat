import {
  getCountryCallingCode,
  getExampleNumber,
  isValidPhoneNumber,
  getCountries,
  type CountryCode,
} from "libphonenumber-js/min";
import examples from "libphonenumber-js/mobile/examples";
import { useEffect, useRef, useState } from "react";

const PhoneInputComponent = ({
  setPhoneNumber,
}: {
  setPhoneNumber: (value: string) => void;
}) => {
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  const countries = getCountries()
    .map((el) => ({ code: el, name: regionNames.of(el) }))
    .sort((a, b) => (a?.name || "").localeCompare(b?.name || ""));

  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("RW");
  const [phoneExample, setPhoneExample] = useState("720123456");
  const [countryCode, setCountryCode] = useState("250");
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState<null | boolean>(
    null
  );
  const [localPhoneNumber, setLocalPhoneNumber] = useState<string[]>(
    new Array(phoneExample.length).fill("")
  );

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    const example =
      getExampleNumber(selectedCountry, examples)?.nationalNumber || "";
    const code =
      getExampleNumber(selectedCountry, examples)?.countryCallingCode || "";
    setPhoneExample(example);
    setCountryCode(code);
    setLocalPhoneNumber(new Array(example.length).fill(""));
    inputRefs.current = new Array(example.length).fill(null);
  }, [selectedCountry]);

  // Handle single input change
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // only numbers

    const updated = localPhoneNumber.map((el, i) => (i === index ? value : el));
    setLocalPhoneNumber(updated);

    // focus next input
    if (value && index < inputRefs.current.length - 1)
      inputRefs.current[index + 1]?.focus();

    const fullNumber = countryCode + updated.join("");
    const valid =
      isValidPhoneNumber(fullNumber, selectedCountry) &&
      updated.every((el) => el != "");

    setPhoneNumberIsValid(valid);

    if (valid) {
      setPhoneNumber(fullNumber);
    } else {
      setPhoneNumber("");
    }
  };

  // Handle backspace
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !localPhoneNumber[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("Text").replace(/\D/g, ""); // only digits
    if (!pastedData) return;

    const newArray = new Array(localPhoneNumber.length).fill("");
    for (let i = 0; i < newArray.length && i < pastedData.length; i++) {
      newArray[i] = pastedData[i];
    }
    setLocalPhoneNumber(newArray);
    setPhoneNumber(newArray.join(""));

    // focus the last filled input or the last input
    const focusIndex = Math.min(
      pastedData.length,
      inputRefs.current.length - 1
    );
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="w-full p-1">
      <div className="font-semibold mb-2">Phone Number</div>
      <select
        name="phone-code"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value as CountryCode)}
        className="bg-white w-full md:w-40 border p-2 border-gray-300 rounded mb-2"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name} +{getCountryCallingCode(country.code)}
          </option>
        ))}
      </select>

      <div className="flex gap-[0.5px]">
        {/* Country code */}
        <div className="flex gap-[0.5px] items-center">
          {[...countryCode].map((el, index) => (
            <input
              key={index}
              type="text"
              readOnly
              value={el}
              className="w-7 h-9 md:w-10 md:h-12 text-center text-sm md:text-lg font-semibold border rounded border-gray-300 bg-gray-100"
            />
          ))}
        </div>

        {/* Phone number inputs */}
        <div className="flex gap-[0.5px] ">
          {phoneExample.split("").map((el, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={1}
              value={localPhoneNumber[index] || ""}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              placeholder={localPhoneNumber.filter(Boolean).length ? "" : el}
              className={`w-7 h-9 ${
                phoneNumberIsValid === false ? "border-2 border-red-300" : ""
              } md:w-10 md:h-12 text-center text-sm md:text-lg font-semibold border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhoneInputComponent;
