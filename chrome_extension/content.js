let magicImages = [
    "https://i.insider.com/5c79a8cfeb3ce837863155f5?width=1000&format=jpeg&auto=webp",
    "https://i.insider.com/5c799f24eb3ce83534329ce3?width=1000&format=jpeg&auto=webp",
    "https://i.insider.com/5c7998e3eb3ce81f55185d57?width=1000&format=jpeg&auto=webp",
    "https://i.insider.com/5c79aa22eb3ce823b570a3d2?width=1000&format=jpeg&auto=webp",
    "https://i.insider.com/5ea6fd9dd553f808ba5bf897?width=1000&format=jpeg&auto=webp",
    "https://i.insider.com/5ea702665bd7a503427df796?width=1000&format=jpeg&auto=webp",
    "https://i.insider.com/5ea702156985251b641d5ae7?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5e74de0b235c1801f042b048?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c79aa5ceb3ce83818367f13?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c79a077eb3ce83587495a97?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5e74dce1235c1855c72e1463?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c799009eb3ce81db1646f74?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c799a1beb3ce861ad6ebec5?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c79936beb3ce833524fbe82?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c79926beb3ce86040039e35?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c798dbbeb3ce81d271703b2?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c798ddfeb3ce87e0c21bcf6?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c798aa7eb3ce85e4f2a3563?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c798bf2eb3ce81c847129d3?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c79a93aeb3ce82365718825?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/5c79aa10eb3ce865c8276562?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/6156638c00371000184306fc?width=900&format=jpeg&auto=webp",
    "https://i.insider.com/62ead7f0076fd300189cf1b6?width=900&format=jpeg&auto=webp",
    "https://media.npr.org/assets/img/2022/12/09/fish-2976c9e84968f0884c5743172b51128049cc690d-s1000-c85.webp",
    "https://media.npr.org/assets/img/2022/12/09/penguins-0e7c7c45a1188d5a2ccf897179945d927508b22c-s1000-c85.webp",
    "https://media.npr.org/assets/img/2022/12/09/racoon-23541a76cc2fe71c741fd91edece464b0a6aa906-s1000-c85.webp",
    "https://media.npr.org/assets/img/2022/12/09/pegusus-09ec994c78015e5237b468cc5b8add63b136882e-s1000-c85.webp",
    "https://hips.hearstapps.com/hmg-prod/images/young-seal-smiles-and-waves-royalty-free-image-1585073751.jpg?crop=1xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/female-chimpanzee-calling-royalty-free-image-1585073895.jpg?crop=1xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/chipmunk-nature-photos-1537973822.jpg?crop=1xw:1xh;center,top&resize=980:*",
    "https://hips.hearstapps.com/hmg-prod/images/horses-nature-photos-1537973822.jpg?crop=1xw:1xh;center,top&resize=980:*"
];

const images = document.getElementsByTagName("img");
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'runMagicScript') {
        for(image of images){
            let newImageindex = Math.floor(Math.random() * magicImages.length);
            image.src = magicImages[newImageindex];
        }
    }
});



