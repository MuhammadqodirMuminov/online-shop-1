window.addEventListener("DOMContentLoaded", function () {
	const elProduct = document.querySelectorAll(".product");
	const btns = document.querySelectorAll("button");
	const openmodal = document.querySelector(".open");

	function createcard() {
		let card = document.createElement("div");
		let feild = document.createElement("div");
		let heading = document.createElement("h2");
		let closeBtn = document.createElement("button");

		card.classList.add("cart");
		feild.classList.add("cart-field");
		closeBtn.classList.add("close");

		heading.textContent = "В нашей козине";
		closeBtn.textContent = "Закрыть";

		document.body.appendChild(card);
		card.appendChild(heading);
		card.appendChild(feild);
		card.appendChild(closeBtn);
	}
	createcard();

	let cart = document.querySelector(".cart"),
		close = document.querySelector(".close"),
		field = document.querySelector(".cart-field");

	openmodal.addEventListener("click", function () {
		cart.style.display = "block";
	});

	close.addEventListener("click", function () {
		cart.style.display = "none";
	});

	btns.forEach((item, idx) => {
		item.addEventListener("click", function () {
			let clone = elProduct[idx].cloneNode(true),
				btnItem = clone.querySelector("button");
			field.appendChild(clone);
			btnItem.remove();
            cart.style.display = "block";
            
            elProduct[idx].remove();
		});
	});
});
