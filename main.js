const $toggleSofaView = document.querySelector("#toggleSofaView")
const $sofaView = document.querySelector("#sofaView")

$toggleSofaView.addEventListener("click", () => {
	$sofaView.classList.toggle("360View")

	if ($sofaView.classList.contains("360View")) {
		$toggleSofaView.src = "/assets/close.svg"
		$toggleSofaView.style.width = "1.6rem"
		$toggleSofaView.style.heigth = "1.6rem"
		$toggleSofaView.style.right = "5.5rem"
		$sofaView.src = "/assets/sofaGif.gif"
		return
	}
	$toggleSofaView.style.width = "3rem"
	$toggleSofaView.style.heigth = "2rem"
	$toggleSofaView.style.right = "5rem"
	$toggleSofaView.src = "/assets/360.svg"
	$sofaView.src = "/assets/sofa.svg"
})
