import {
  parsePhoneNumber,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  getCountryCallingCode,
  getExampleNumber,
  getCountries,
  isSupportedCountry,
  PhoneNumber,
  type CountryCode,
  type Examples,
} from "libphonenumber-js/min";
import { useState } from "react";
import metadata from "libphonenumber-js/metadata.full";

const PhoneInputComponent = ({
  onCountryChange,
  phoneNumber,
  setPhoneNumber,
  editPhone,
}: {
  onCountryChange: (country: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  editPhone: boolean;
}) => {
  const countries = getCountries();
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("RW");

  console.log(countries);

  return (
    <div>
      <div>Phone Number</div>
      <div className="grid grid-cols-2">
        <select
          name="phone-code"
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value as CountryCode)}
          className="col-span-1 bg-white"
        >
          {countries.map((country) => {
            return <option value={country}>{country}</option>;
          })}
        </select>
        <div className="flex col-span-1 gap-2">
          <div className="flex gap-2 flex-wrap">
            {new Array(metadata.countries[selectedCountry]?.length)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  //   ref={(el) => {
                  //     inputRefs.current[index] = el;
                  //   }}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={phoneNumber}
                  //   onChange={(e) => handleDigitChange(index, e.target.value)}
                  //   onKeyDown={(e) => handleKeyDown(index, e)}
                  //   onPaste={handlePaste}
                  disabled={!editPhone}
                  className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all duration-200 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="0"
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneInputComponent;
