import { add } from "../utils/story";
import { findMoveable, wait } from "../utils/testing";
import { expect } from "@storybook/jest";

export default {
    title: "Variable Situations",
};

export const TestsNoTarget = add("No Target", {
    app: require("./ReactNoTargetApp").default,
    path: require.resolve("./ReactNoTargetApp"),
});
export const TestsClickATag = add("Click a tag", {
    app: require("./ReactATagApp").default,
    path: require.resolve("./ReactATagApp"),
});

export const TestsInput = add("Any native input element", {
    app: require("./ReactInputApp").default,
    path: require.resolve("./ReactInputApp"),
});
export const TestsSafari = add("Test Control Box in Safari", {
    app: require("./ReactSafariApp").default,
    path: require.resolve("./ReactSafariApp"),
});
export const TestsCustomElement = add("Test Custom Element Offset", {
    app: require("./ReactCustomElementApp").default,
    path: require.resolve("./ReactCustomElementApp"),
    play: async ({ canvasElement }) => {
        await wait();
        const moveableElement = findMoveable(canvasElement);

        expect(moveableElement.style.transform).toBe("translate3d(60px, 192px, 0px)");
    },
});
export const TestsCustomElementBounds = add("Test Custom Element with Bounds", {
    app: require("./ReactCustomElementBoundsApp").default,
    path: require.resolve("./ReactCustomElementBoundsApp"),
    play: async ({ canvasElement }) => {
        await wait();
        const customElement = canvasElement.querySelector("custom-element")!;
        const innerMoveable = customElement!.shadowRoot!.querySelector<HTMLElement>(".moveable-control-box")!;

        expect(innerMoveable.style.transform).toBe("translate3d(50px, 50px, 0px)");
    },
});
export const TestsAccuracy = add("Check drag accuracy when using bounds", {
    app: require("./ReactAccuracyApp").default,
    path: require.resolve("./ReactAccuracyApp"),
});
export const TestsLargeZoom = add("Check element guidelines accuracy when zoom is large", {
    app: require("./ReactLargeZoomElementGuidelinesApp").default,
    path: require.resolve("./ReactLargeZoomElementGuidelinesApp"),
});
export const TestsFlex = add("Test flex element", {
    app: require("./ReactFlexApp").default,
    path: require.resolve("./ReactFlexApp"),
});
export const TestsWillChange = add("Test Container with will change", {
    app: require("./ReactWillChangeApp").default,
    path: require.resolve("./ReactWillChangeApp"),
});
export const TestsStopDrag = add("Stop drag if target is select, input, textarea", {
    app: require("./ReactStopDragApp").default,
    path: require.resolve("./ReactStopDragApp"),
});
export const TestsClick = add("Stop Click event's Propagation for dragStart", {
    app: require("./ReactClickApp").default,
    path: require.resolve("./ReactClickApp"),
});
export const TestsNestedTarget = add("Nested Moveable's target", {
    app: require("./ReactNestedTargetApp").default,
    path: require.resolve("./ReactNestedTargetApp"),
});
export const TestsZoomedCursor = add("Zoomed Cursor", {
    app: require("./ReactZoomedCursorApp").default,
    path: require.resolve("./ReactZoomedCursorApp"),
});

export const TestsHandleLargeNumber = add("Test performance for large number instances", {
    app: require("./ReactHandleLargeNumberApp").default,
    path: require.resolve("./ReactHandleLargeNumberApp"),
});

export const TestsOverflow = add("Test overflow: auto target", {
    app: require("./ReactOverflowApp").default,
    path: require.resolve("./ReactOverflowApp"),
});
export const TestsDragtarget = add("Test Drag Target", {
    app: require("./ReactDragTargetApp").default,
    path: require.resolve("./ReactDragTargetApp"),
});
export const TestsDragStart = add("Test Drag Start Group Manually", {
    app: require("./ReactDragStartGroupApp").default,
    path: require.resolve("./ReactDragStartGroupApp"),
});


export const TestsChangingSnapContainer = add("Test Changing Snap Container", {
    app: require("./ReactChangingSnapContainerApp").default,
    path: require.resolve("./ReactChangingSnapContainerApp"),
});

export const TestsFixedSnap = add("Test Snap with position: fixed", {
    app: require("./ReactFixedSnapApp").default,
    path: require.resolve("./ReactFixedSnapApp"),
});


export const TestsZoomedTarget = add("Test css zoomed target", {
    app: require("./ReactZoomedTargetApp").default,
    path: require.resolve("./ReactZoomedTargetApp"),
});

export const TestsZoomedSnap = add("Test snap for scaled target", {
    app: require("./ReactZoomedSnapApp").default,
    path: require.resolve("./ReactZoomedSnapApp"),
});

export const TestsRequestBounds = add("Test request with bounds", {
    app: require("./ReactRequestBoundsApp").default,
    path: require.resolve("./ReactRequestBoundsApp"),
});

export const TestRotateClippable = add("Test rotate & clippable", {
    app: require("./ReactRotateClippableApp").default,
    path: require.resolve("./ReactRotateClippableApp"),
});
