let outputSection = document.getElementById("outputSection");
const inputName = document.getElementById("name");

let click = false;
let editdata;

const handleSubmit = (e) => {
  e.preventDefault();

  if (inputName.value) {
    if (!click) {
      const item = document.createElement("div");
      item.innerHTML = `<div class="output_Item">
            <p>${inputName.value}</p>
            <div class="output_Item_Icon">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>`;
      outputSection.appendChild(item);
      inputName.value = "";

      item.getElementsByTagName("i")[0].addEventListener("click", () => {
        const text = item.getElementsByTagName("p");
        inputName.value = item.innerText;
        editdata = item;
        click = true;
        console.log(editdata);
      });

      item.getElementsByTagName("i")[1].addEventListener("click", () => {
        item.remove();
      });
    } else {
      const item = document.createElement("div");
      item.innerHTML = `<div class="output_Item">
            <p>${inputName.value}</p>
            <div class="output_Item_Icon">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>`;
      outputSection.replaceChild(item, editdata);
      click = false;
      inputName.value = "";

      item.getElementsByTagName("i")[0].addEventListener("click", () => {
        const text = item.getElementsByTagName("p");
        inputName.value = item.innerText;
        editdata = item;
        click = true;
        console.log(editdata);
      });

      item.getElementsByTagName("i")[1].addEventListener("click", () => {
        item.remove();
      });
    }
  } else {
    alert("input Empty");
  }
};
