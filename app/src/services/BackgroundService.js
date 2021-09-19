export default class BackgroundService {

    static changeBackground = (background) => {
        document.getElementById("root").style.background = background;
        document.getElementById("root").style.backgroundSize = "cover";
    }

}
