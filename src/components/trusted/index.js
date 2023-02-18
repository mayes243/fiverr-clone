import React from "react";

const Trusted = () => {
  return (
    <div className="bg-gray-100 h-24 flex justify-center">
      <div className="flex items-center justify-between text-gray-400 font-medium gap-8">
        <span>Trusted by:</span>
        {["facebook", "google", "netflix", "p&g", "paypal"].map(
          (img, index) => (
            <img
              key={index}
              src={`/assets/trusted-by-${img}.png`}
              alt={img}
              className="object-contain mix-blend-multiply"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Trusted;
