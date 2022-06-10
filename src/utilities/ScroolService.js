import { TOTAL_SCREENS } from "./commonUtils";
import { Subject } from "rxjs";


export default class ScrollService {
    static ScrollService = new ScrollService();

    static currentScreenBroadCaster = new Subject()
    static currentScreenFadeIn = new Subject()


    constructor() {
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
    }
    scrollToHireME = () => {
        let contactMEScreen = document.getElementById('Contact Me')
        if (!contactMEScreen) return;
        contactMEScreen.scrollIntoView({ behaviour: 'smooth' })
    }
    scrollToHome = () => {
        let homeScreen = document.getElementById('Home')
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behaviour: 'smooth' })
    }
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.Bottom;

        let PartiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVsible = elementTop >= elem; elementBottom <= window.innerHeight;

        switch (type) {
            case 'partial':
                return PartiallyVisible

            case 'complete':
                return completelyVsible
            default:
                return false
        }
    }

    checkCurrentScreenUderViewport = (event) => {
        if (!event || object.keys(event).lenght < 1)
            return;
        for (let screen of TOTAL_SCREENS) {
            let screeFromDOM = document.getElementById(screen.screen_name)
            if (!screeFromDOM)
                continue;


            let fullyVisible = this.isElementInView(screeFromDOM, 'complete')
            let PartiallyVisible = this.isElementInView(screeFromDOM, 'partial')

            if (fullyVisible || PartiallyVisible) {
                if (PartiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name
                    });
                    screen['alreadyRendered'] = true;
                    break
                }
                if (fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                }
            }
        }
    }
}
