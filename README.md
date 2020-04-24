# ModalSquared.js
ModalSquared.js is a super small less than a 1kb library for showing and hiding modals.

## Documentation
### Note: every modal has to have the modal class!
## Example
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ModalSquaredTest</title>
    <script src="ModalSquared.js"></script>
    <link rel="stylesheet" type="text/css" href="ModalSquared.css">
</head>
<body>
    <button onclick="ShowModal('myModal')">Click Me!</button>
    <div class="modal" id="myModal">
        <h1>This is my modal</h1>
        <a onclick="HideModal('myModal')" style="font-size:32px;">&times</a>
    </div>
</body>
</html>
```
### ModalShow
ModalShow shows a modal. it takes an id of the modal you want to show
### ModalHide
ModalHide hides a modal. it takes an id of the modal you want to hide
