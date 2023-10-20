let open = 0;

function openNavbar(){
    if (open == 0){
        open = 1;
        document.getElementById("navDropdown").classList.remove("navDropdownFalse");
        document.getElementById("navDropdown").classList.add("navDropdownTrue");
        return;
    }
    if (open == 1){
        open = 0;
        document.getElementById("navDropdown").classList.remove("navDropdownTrue");
        document.getElementById("navDropdown").classList.add("navDropdownFalse");
        return;
    }   
}
addEventListener("resize", (event) => {
    if(screen.width > 600) {
        document.getElementById("navDropdown").classList.remove("navDropdownTrue");
        document.getElementById("navDropdown").classList.add("navDropdownFalse");
        open = 0;
    }
});