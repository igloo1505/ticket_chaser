"use client";
import clsx from "clsx";
import React, { useEffect, useState, useRef, forwardRef } from "react";
import {
    animateSignupCardDimensions,
    setActivePositionOnResize,
    setSignupStepTranstionState,
    signupCardResizeObserver,
} from "#/animations/signupForm";

/* HACK: Positio the largest card relative to make sure everything fits, and stretch the others accordingly with h:100 and w:100 */
interface MultiStepTransitionProps {
    step: number;
    activeStep: number;
    translateRight?: string;
    translateLeft?: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    relative?: boolean;
}

export type TransitionStateType = "right" | "left" | "active";

const MultiStepTransition = forwardRef(
    (
        {
            step,
            relative,
            className,
            style,
            activeStep,
            translateLeft,
            translateRight,
            children,
        }: MultiStepTransitionProps,
        ref: React.ForwardedRef<HTMLDivElement>,
    ) => {
        const animateActive = async () => {
            animateSignupCardDimensions(ref as React.RefObject<HTMLDivElement>);
        };

        const onResize = () => {
            if (activeStep === step) {
                signupCardResizeObserver();
            }
        };

        useEffect(() => {
            const setPositionState = async (activeStep: number, step: number) => {
                if (activeStep > step) {
                    return setSignupStepTranstionState(
                        ref as React.RefObject<HTMLDivElement>,
                        "left",
                    );
                }
                if (activeStep < step) {
                    return setSignupStepTranstionState(
                        ref as React.RefObject<HTMLDivElement>,
                        "right",
                    );
                }
                if (activeStep === step) {
                    return await animateActive();
                }
            };
            setPositionState(activeStep, step);
        }, [activeStep, step]);

        useEffect(() => {
            window.addEventListener("resize", onResize);
            return () => window.removeEventListener("resize", onResize);
        }, []);

        return (
            <div
        className= {
                clsx(
          "min-w-fit h-fit w-full transition-transform duration-300 opacity-0 hidden",
                    className && className,
            relative ? "relative" : "absolute",
        )}
ref = { ref }
id = {`multi-step-form-${step}`}
style = {{
          ...(style && { ...style }),
        }}
      >
    { children }
    </div>
    );
  },
);

MultiStepTransition.displayName = "MultiStepTransition";

export default MultiStepTransition;
