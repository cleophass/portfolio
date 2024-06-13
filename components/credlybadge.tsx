import React, { useEffect } from "react";

const CredlyBadge: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div
        data-iframe-width="300"
        data-iframe-height="300"
        data-share-badge-id="4bd254d8-ad08-423c-b28c-25fbeea86c41"
        data-share-badge-host="https://www.credly.com"
        className="shadow-lg rounded-lg overflow-hidden"
      ></div>
    </div>
  );
};

export default CredlyBadge;
