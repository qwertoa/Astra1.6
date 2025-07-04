document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-action-btn');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const version = button.getAttribute('data-version');
            showVersionPopup(version);
        });
    });

    function showVersionPopup(version) {
        const wasmUrl = `play/wasm/${version}`;
        const jsUrl = `play/js/${version}`;

        const popup = document.createElement('div');
        popup.className = 'modal-overlay';
        popup.innerHTML = `
            <div class="modal-content-box">
                <button class="modal-close-btn" id="version-modal-close-btn">&times;</button>
                <h3>Select Launch Type</h3>
                <div class="modal-buttons">
                    <a href="${wasmUrl}" class="modal-btn confirm">WASM</a>
                    <a href="${jsUrl}" class="modal-btn confirm">JS</a>
                </div>
            </div>
        `;

        document.body.appendChild(popup);

        const closeButton = popup.querySelector('#version-modal-close-btn');
        closeButton.addEventListener('click', () => {
            popup.remove();
        });
    }
});
