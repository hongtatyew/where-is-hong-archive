import { useEffect } from "react";

export default function BuyMeCoffeeComponent() {
  useEffect(() => {
    const script = document.createElement("script");
    const div = document.getElementById("supportByBMC");
    script.setAttribute("data-name", "BMC-Widget");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "hongtat");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute(
      "data-message",
      "Loving the ride so far? Help fuel the adventure with a virtual coffee! ☕️"
    );
    script.setAttribute("data-color", "#BD5FFF");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");

    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      var evt = document.createEvent("Event");
      evt.initEvent("DOMContentLoaded", false, false);
      window.dispatchEvent(evt);
    };

    div.appendChild(script);
  }, []);

  return (
    <div className="fixed bottom-20 right-6">
      <div id="supportByBMC"></div>
    </div>
  );
}
