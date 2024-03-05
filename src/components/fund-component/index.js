import { useEffect } from "react";

export default function FundComponent() {
    useEffect(() => {
		const script = document.createElement("script");
		const div = document.getElementById("supportByBMC");
		script.setAttribute("data-name", "BMC-Widget");
		script.src = "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js";
		script.setAttribute("data-id", "evavic44");
		script.setAttribute("data-description", "Support me on Buy me a coffee!");
		script.setAttribute(
			"data-message",
			"Thank you for visiting my website. If this app has helped you in anyway, consider buying us a coffee. ✨😎",
		);
		script.setAttribute("data-color", "#FFDD00");
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

    return(
        <div class="fixed bottom-20 right-6">
            <div id="supportByBMC">hihihihihihihhi</div>
            <img src="/img/mario_gold_coin.png" className="w-[3rem] sm:w-[4rem] mx-auto lg:mb-0" />
            <span className='text-base font-semibold leading-7 text-indigo-600'>Buy Me a Meal</span>
</div>
    );
}