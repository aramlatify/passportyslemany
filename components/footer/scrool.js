import React, { useRef, useEffect, useState } from "react";
import initialEmails from "./data";




export default function App() {
  const [emails, setEmails] = useState(initialEmails);

  const wrapperRef = useRef(null);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  useEffect(() => {
    if (wrapperRef.current) {
      setWrapperWidth(wrapperRef.current.clientWidth);
    }
  }, [wrapperRef]);
  
  let animationDuration = emails.length / 100;

  if (animationDuration < 100) {
    animationDuration = 100;
  }
  return (
    <div ref={wrapperRef} className="dsf-breaking">
      <div className="dsf-breaking__title">ڕێنماییەکان</div>
      <div
        className="dsf-breaking__text"
        style={{
          "--animation-duration": `${animationDuration}s`,
          "--wrapper-width": `${wrapperWidth}px`
        }}
      >
        <div>
          {emails.map((email) => (
            <span className={`email`}>
              <span 
                class=""
                
              >
                <input
                style={{ paddingLeft: 30, paddingRight: 0 }}
                className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                />
                {email.sender}
              </span>
              <span
                className=""
                style={{ paddingLeft: 5, paddingRight: 0 }}
              >
                {email.title}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
