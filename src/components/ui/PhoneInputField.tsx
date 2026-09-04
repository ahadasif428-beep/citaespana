"use client";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type Props = {
  value: string;
  onChange: (value: string | undefined) => void;
};

export default function PhoneInputField({
  value,
  onChange,
}: Props) {
  return (
    <PhoneInput
      international
      defaultCountry="ES"
      placeholder="Enter phone number"
      value={value}
      onChange={onChange}
      className="w-full rounded-xl border border-gray-300 px-4 py-3"
    />
  );
}