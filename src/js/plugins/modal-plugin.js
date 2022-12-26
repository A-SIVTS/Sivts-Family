function _createModal(options) {
  console.log(options.title);

  const modal = document.createElement("div");
  modal.classList.add("modal-s");
  modal.insertAdjacentHTML(
    "afterbegin",
    `
 <div class="modal-s__overlay">
	 <div class="modal-s__container">
		 <div class="modal-s__window">
			 <div class="modal-s__header">${options.title || ""}</div>
			 <div class="modal-s__content"></div>
			 <div class="modal-s__footer">
			 	<a href=${options.href} class="modal-s__btn _icon-arrow-up-right" id="modalCloseBtn">${
      options.btnText || "ok"
    }</a>
			 </div>
		 </div>
	 </div>
 </div>

 `
  );
  document.body.appendChild(modal);

  return modal;
}

$.modal = function (options) {
  console.log(options);

  const $modal = _createModal(options);

  return {
    open() {
      $modal.classList.add("open");
     
    },
    close() {
      $modal.classList.remove("open");
        document.body.classList.remove('lock')
    },
    destroy() {},
  };
};
