const addTextButton = document.querySelector('.advance-options button');
const editorPanel = document.querySelector('.editor-panel');
const closeButton = document.getElementById('close-editor-panel');

addTextButton.addEventListener('click', () => {
    editorPanel.style.display = 'block';
    addTextButton.style.display = 'none';
});

closeButton.addEventListener('click', () => {
    editorPanel.style.display = 'none';
    addTextButton.style.display = 'block';
});

document.querySelector('.editor-panel').style.display = 'none';
document.querySelector('#close-editor-panel').style.display = 'none';


function showEditorPanel() {
    const editorPanel = document.querySelector('.editor-panel');
    const crossButton = document.querySelector('#close-editor-panel');

    editorPanel.style.display = 'block';
    crossButton.style.display = 'block';
}


function hideEditorPanel() {
    const editorPanel = document.querySelector('.editor-panel');
    const crossButton = document.querySelector('#close-editor-panel');

    editorPanel.style.display = 'none';
    crossButton.style.display = 'none';
}


document.querySelector('.advance-options').addEventListener('click', showEditorPanel);


function closeEditorPanel() {
    hideEditorPanel();
}


document.getElementById('close-editor-panel').addEventListener('click', closeEditorPanel);
