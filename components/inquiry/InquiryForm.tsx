"use client";

import {
    useState,
    type FormEventHandler,
} from "react";
import { motion } from "motion/react";
import SuccessMessage from "./SuccessMessage";

const foodCartOptions = [
    {
        value: "charcuterie",
        label: "Charcuterie",
    },
    {
        value: "snack-cart",
        label: "Snack Cart",
    },
    {
        value: "cotton-candy",
        label: "Cotton Candy",
    },
    {
        value: "paleta-cart",
        label: "Paleta Cart",
    },
    {
        value: "elote",
        label: "Elote",
    },
    {
        value: "dubai-chocolate",
        label: "Dubai Chocolate",
    },
    {
        value: "waffle-stick",
        label: "Waffle Stick",
    },
    {
        value: "other",
        label: "Other",
    },
];

const interactiveOptions = [
    {
        value: "bloom-bar",
        label: "Bloom Bar",
    },
    {
        value: "onesie-decorating-station",
        label: "Onesie Decorating Station",
    },
    {
        value: "candy-bar",
        label: "Candy Bar",
    },
    {
        value: "other",
        label: "Other",
    },
];

const serviceOptions = [
    {
        value: "food-cart-experience",
        label: "Food Cart Experience",
    },
    {
        value: "cart-rental-only",
        label: "Cart Rental Only",
    },
    {
        value: "interactive-experience",
        label: "Interactive Experience",
    },
    {
        value: "marquee-letters",
        label: "Marquee Letters",
    },
    {
        value: "other",
        label: "Other",
    },
];

const inputStyles =
    "w-full min-w-0 max-w-full box-border rounded-md border border-[#d8bd8c]/55 bg-[#fbf7f2]/45 px-4 py-3.5 text-[#3f3a37] outline-none transition placeholder:text-[#a39a94] focus:border-[#b88941] focus:bg-white focus:ring-2 focus:ring-[#c5a065]/15";

const selectStyles =
    "w-full appearance-none rounded-md border border-[#d8bd8c]/55 bg-[#fbf7f2]/45 px-4 py-3.5 pr-12 text-[#3f3a37] outline-none transition focus:border-[#b88941] focus:bg-white focus:ring-2 focus:ring-[#c5a065]/15";

const labelStyles =
    "mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#665f5b]";

function SelectArrow() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a77b35]"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 8 4 4 4-4"
            />
        </svg>
    );
}

export default function InquiryForm() {
    const [isSubmitted, setIsSubmitted] =
        useState(false);

    const [isSubmitting, setIsSubmitting] =
        useState(false);

    const [submitError, setSubmitError] =
        useState("");

    const [preferredContact, setPreferredContact] =
        useState("");

    const [serviceType, setServiceType] =
        useState("");

    const [foodOption, setFoodOption] =
        useState("");

    const [
        interactiveOption,
        setInteractiveOption,
    ] = useState("");

    const [
        addAdditionalServices,
        setAddAdditionalServices,
    ] = useState("");

    const [marqueeType, setMarqueeType] = useState("");

    const resetFormState = () => {
        setPreferredContact("");
        setServiceType("");
        setFoodOption("");
        setInteractiveOption("");
        setAddAdditionalServices("");
        setMarqueeType("");
    };

    const handleSubmit: FormEventHandler<
        HTMLFormElement
    > = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);
        setSubmitError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        const additionalServices = formData
            .getAll("additionalServices")
            .map((service) => String(service));

        const inquiry = {
            name: String(
                formData.get("name") ?? "",
            ),

            email: String(
                formData.get("email") ?? "",
            ),

            phone: String(
                formData.get("phone") ?? "",
            ),

            preferredContact: String(
                formData.get(
                    "preferredContact",
                ) ?? "",
            ),

            eventType: String(
                formData.get("eventType") ?? "",
            ),

            eventDate: String(
                formData.get("eventDate") ?? "",
            ),

            startTime: String(
                formData.get("startTime") ?? "",
            ),

            endTime: String(
                formData.get("endTime") ?? "",
            ),

            guestCount: String(
                formData.get("guestCount") ?? "",
            ),

            serviceType: String(
                formData.get("serviceType") ?? "",
            ),

            foodOption: String(
                formData.get("foodOption") ?? "",
            ),

            otherFoodOption: String(
                formData.get(
                    "otherFoodOption",
                ) ?? "",
            ),

            interactiveOption: String(
                formData.get(
                    "interactiveOption",
                ) ?? "",
            ),

            otherInteractiveOption: String(
                formData.get(
                    "otherInteractiveOption",
                ) ?? "",
            ),

            marqueeType: String(
                formData.get("marqueeType") ?? "",
            ),

            marqueeNumbers: String(
                formData.get("marqueeNumbers") ?? "",
            ),

            otherService: String(
                formData.get("otherService") ?? "",
            ),

            addAdditionalServices: String(
                formData.get(
                    "addAdditionalServices",
                ) ?? "",
            ),

            additionalServices,

            additionalServiceDetails: String(
                formData.get(
                    "additionalServiceDetails",
                ) ?? "",
            ),

            message: String(
                formData.get("message") ?? "",
            ),
        };

        try {
            const response = await fetch(
                "/api/inquiry",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json",
                    },
                    body: JSON.stringify(inquiry),
                },
            );

            const result =
                (await response.json()) as {
                    success?: boolean;
                    error?: string;
                };

            if (!response.ok) {
                throw new Error(
                    result.error ||
                    "The inquiry could not be submitted.",
                );
            }

            form.reset();
            resetFormState();
            setIsSubmitted(true);
        } catch (error) {
            console.error(
                "Inquiry submission error:",
                error,
            );

            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "The inquiry could not be submitted. Please try again.",
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <SuccessMessage
                onReset={() =>
                    setIsSubmitted(false)
                }
            />
        );
    }

    return (
        <section className="relative overflow-hidden bg-[#fbf7f2fc] px-6 pb-24 pt-10 lg:px-10 lg:pb-32 lg:pt-14">
            <motion.form
                onSubmit={handleSubmit}
                initial={{
                    opacity: 0,
                    y: 30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                transition={{
                    duration: 0.8,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                    ],
                }}
                className="mx-auto max-w-4xl border border-[#d8bd8c]/45 bg-[#fffdfa] p-6 shadow-[0_22px_65px_rgba(92,65,45,0.09)] sm:p-10 lg:p-14"
            >
                <div className="grid min-w-0 gap-7 sm:grid-cols-2">
                    {/* Full name */}
                    <label className="block">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Full Name
                        </span>

                        <input
                            type="text"
                            name="name"
                            required
                            autoComplete="name"
                            className={
                                inputStyles
                            }
                            placeholder="Your full name"
                        />
                    </label>

                    {/* Email */}
                    <label className="block">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Email
                        </span>

                        <input
                            type="email"
                            name="email"
                            required
                            autoComplete="email"
                            className={
                                inputStyles
                            }
                            placeholder="you@example.com"
                        />
                    </label>

                    {/* Phone */}
                    <label className="block">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Phone
                        </span>

                        <input
                            type="tel"
                            name="phone"
                            required={
                                preferredContact ===
                                "phone"
                            }
                            autoComplete="tel"
                            className={
                                inputStyles
                            }
                            placeholder="(000) 000-0000"
                        />
                    </label>

                    {/* Preferred contact */}
                    <label className="block">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Preferred Contact Method
                        </span>

                        <div className="relative">
                            <select
                                name="preferredContact"
                                required
                                value={
                                    preferredContact
                                }
                                onChange={(
                                    event,
                                ) =>
                                    setPreferredContact(
                                        event
                                            .target
                                            .value,
                                    )
                                }
                                className={
                                    selectStyles
                                }
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Select a contact
                                    method
                                </option>

                                <option value="email">
                                    Email
                                </option>

                                <option value="phone">
                                    Phone
                                </option>
                            </select>

                            <SelectArrow />
                        </div>
                    </label>

                    {/* Event type */}
                    <label className="block">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Event Type
                        </span>

                        <div className="relative">
                            <select
                                name="eventType"
                                required
                                defaultValue=""
                                className={
                                    selectStyles
                                }
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Select your event
                                    type
                                </option>

                                <option value="birthday">
                                    Birthday
                                </option>

                                <option value="wedding">
                                    Wedding
                                </option>

                                <option value="baby-shower">
                                    Baby Shower
                                </option>

                                <option value="bridal-shower">
                                    Bridal Shower
                                </option>

                                <option value="graduation">
                                    Graduation
                                </option>

                                <option value="corporate">
                                    Corporate Event
                                </option>

                                <option value="holiday">
                                    Holiday
                                    Celebration
                                </option>

                                <option value="other">
                                    Other
                                </option>
                            </select>

                            <SelectArrow />
                        </div>
                    </label>

                    {/* Event date */}
                    <label className="block min-w-0">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Event Date
                        </span>

                        <div className="min-w-0 max-w-full overflow-hidden">
                            <input
                                type="date"
                                name="eventDate"
                                required
                                style={{
                                    WebkitAppearance: "none",
                                    appearance: "none",
                                }}
                                className={`${inputStyles} block cursor-pointer [color-scheme:light]`}
                            />
                        </div>
                    </label>

                    {/* Start time */}
                    <label className="block min-w-0">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Start Time
                        </span>

                        <div className="min-w-0 max-w-full overflow-hidden">
                            <input
                                type="time"
                                name="startTime"
                                required
                                style={{
                                    WebkitAppearance: "none",
                                    appearance: "none",
                                }}
                                className={`${inputStyles} block cursor-pointer [color-scheme:light]`}
                            />
                        </div>
                    </label>

                    {/* End time */}
                    <label className="block min-w-0">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            End Time
                        </span>

                        <div className="min-w-0 max-w-full overflow-hidden">
                            <input
                                type="time"
                                name="endTime"
                                required
                                style={{
                                    WebkitAppearance: "none",
                                    appearance: "none",
                                }}
                                className={`${inputStyles} block cursor-pointer [color-scheme:light]`}
                            />
                        </div>
                    </label>

                    {/* Guest count */}
                    <label className="block sm:col-span-2">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Estimated Number of
                            Guests
                        </span>

                        <input
                            type="number"
                            name="guestCount"
                            required
                            min="1"
                            inputMode="numeric"
                            className={
                                inputStyles
                            }
                            placeholder="For example, 75"
                        />
                    </label>
                </div>

                {/* Primary service */}
                <div className="mt-9">
                    <label className="block">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            What Service Are You Interested In?
                        </span>

                        <div className="relative">
                            <select
                                name="serviceType"
                                required
                                value={
                                    serviceType
                                }
                                onChange={(
                                    event,
                                ) => {
                                    const value =
                                        event.target
                                            .value;

                                    setServiceType(
                                        value,
                                    );

                                    setFoodOption(
                                        "",
                                    );

                                    setInteractiveOption(
                                        "",
                                    );
                                }}
                                className={
                                    selectStyles
                                }
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Select a service
                                </option>

                                {serviceOptions.map(
                                    (service) => (
                                        <option
                                            key={
                                                service.value
                                            }
                                            value={
                                                service.value
                                            }
                                        >
                                            {
                                                service.label
                                            }
                                        </option>
                                    ),
                                )}
                            </select>

                            <SelectArrow />
                        </div>
                    </label>

                    {/* Food cart option */}
                    {serviceType ===
                        "food-cart-experience" && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="mt-6"
                            >
                                <label className="block">
                                <span
                                    className={
                                        labelStyles
                                    }
                                >
                                    Food Cart Option
                                </span>

                                    <div className="relative">
                                        <select
                                            name="foodOption"
                                            required
                                            value={
                                                foodOption
                                            }
                                            onChange={(
                                                event,
                                            ) =>
                                                setFoodOption(
                                                    event
                                                        .target
                                                        .value,
                                                )
                                            }
                                            className={
                                                selectStyles
                                            }
                                        >
                                            <option
                                                value=""
                                                disabled
                                            >
                                                Select a
                                                food option
                                            </option>

                                            {foodCartOptions.map(
                                                (
                                                    option,
                                                ) => (
                                                    <option
                                                        key={
                                                            option.value
                                                        }
                                                        value={
                                                            option.value
                                                        }
                                                    >
                                                        {
                                                            option.label
                                                        }
                                                    </option>
                                                ),
                                            )}
                                        </select>

                                        <SelectArrow />
                                    </div>
                                </label>

                                {foodOption ===
                                    "other" && (
                                        <label className="mt-5 block">
                                    <span
                                        className={
                                            labelStyles
                                        }
                                    >
                                        Other Food
                                        Option
                                    </span>

                                            <input
                                                type="text"
                                                name="otherFoodOption"
                                                required
                                                className={
                                                    inputStyles
                                                }
                                                placeholder="Tell us what you have in mind"
                                            />
                                        </label>
                                    )}
                            </motion.div>
                        )}

                    {/* Cart rental only */}
                    {serviceType ===
                        "cart-rental-only" && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="mt-6 border border-[#d8bd8c]/40 bg-[#fbf7f2]/45 px-5 py-4"
                            >
                                <p className="text-sm leading-6 text-[#746b65]">
                                    You are requesting a
                                    cart rental without a
                                    staffed food or
                                    interactive experience.
                                    Add any styling, color,
                                    setup, or rental details
                                    in the additional
                                    information section.
                                </p>
                            </motion.div>
                        )}

                    {/* Interactive option */}
                    {serviceType ===
                        "interactive-experience" && (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="mt-6"
                            >
                                <label className="block">
                                <span
                                    className={
                                        labelStyles
                                    }
                                >
                                    Interactive
                                    Experience
                                </span>

                                    <div className="relative">
                                        <select
                                            name="interactiveOption"
                                            required
                                            value={
                                                interactiveOption
                                            }
                                            onChange={(
                                                event,
                                            ) =>
                                                setInteractiveOption(
                                                    event
                                                        .target
                                                        .value,
                                                )
                                            }
                                            className={
                                                selectStyles
                                            }
                                        >
                                            <option
                                                value=""
                                                disabled
                                            >
                                                Select an
                                                experience
                                            </option>

                                            {interactiveOptions.map(
                                                (
                                                    option,
                                                ) => (
                                                    <option
                                                        key={
                                                            option.value
                                                        }
                                                        value={
                                                            option.value
                                                        }
                                                    >
                                                        {
                                                            option.label
                                                        }
                                                    </option>
                                                ),
                                            )}
                                        </select>

                                        <SelectArrow />
                                    </div>
                                </label>

                                {interactiveOption ===
                                    "other" && (
                                        <label className="mt-5 block">
                                    <span
                                        className={
                                            labelStyles
                                        }
                                    >
                                        Other
                                        Interactive
                                        Experience
                                    </span>

                                            <input
                                                type="text"
                                                name="otherInteractiveOption"
                                                required
                                                className={
                                                    inputStyles
                                                }
                                                placeholder="Describe the experience you have in mind"
                                            />
                                        </label>
                                    )}
                            </motion.div>
                        )}

                    {/* Marquee letters */}
                    {/* Marquee Letters */}

                    {serviceType === "marquee-letters" && (
                        <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6"
                        >
                            <label className="block">
            <span className={labelStyles}>
                Marquee Option
            </span>

                                <div className="relative">
                                    <select
                                        name="marqueeType"
                                        required
                                        value={marqueeType}
                                        onChange={(event) =>
                                            setMarqueeType(event.target.value)
                                        }
                                        className={selectStyles}
                                    >
                                        <option value="" disabled>
                                            Select an option
                                        </option>

                                        <option value="grad">
                                            GRAD
                                        </option>

                                        <option value="numbers">
                                            Numbers (0–9)
                                        </option>
                                    </select>

                                    <SelectArrow />
                                </div>
                            </label>

                            {marqueeType === "numbers" && (
                                <label className="mt-5 block">
                <span className={labelStyles}>
                    Number(s) Requested
                </span>

                                    <input
                                        type="text"
                                        name="marqueeNumbers"
                                        className={inputStyles}
                                        placeholder="Example: 16, 21, 50"
                                        required
                                    />
                                </label>
                            )}
                        </motion.div>
                    )}

                    {/* Other primary service */}
                    {serviceType ===
                        "other" && (
                            <motion.label
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="mt-6 block"
                            >
                            <span
                                className={
                                    labelStyles
                                }
                            >
                                What Are You Looking
                                For?
                            </span>

                                <input
                                    type="text"
                                    name="otherService"
                                    required
                                    className={
                                        inputStyles
                                    }
                                    placeholder="Tell us what you have in mind"
                                />
                            </motion.label>
                        )}
                </div>

                {/* Additional services */}
                <div className="mt-9 border-t border-[#d8bd8c]/30 pt-9">
                    <label className="block">
                        <span
                            className={
                                labelStyles
                            }
                        >
                            Would You Like to Add
                            Another Service?
                        </span>

                        <div className="relative">
                            <select
                                name="addAdditionalServices"
                                required
                                value={
                                    addAdditionalServices
                                }
                                onChange={(
                                    event,
                                ) =>
                                    setAddAdditionalServices(
                                        event
                                            .target
                                            .value,
                                    )
                                }
                                className={
                                    selectStyles
                                }
                            >
                                <option
                                    value=""
                                    disabled
                                >
                                    Select an option
                                </option>

                                <option value="no">
                                    No
                                </option>

                                <option value="yes">
                                    Yes
                                </option>
                            </select>

                            <SelectArrow />
                        </div>
                    </label>

                    {addAdditionalServices ===
                        "yes" && (
                            <motion.fieldset
                                initial={{
                                    opacity: 0,
                                    y: 8,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                className="mt-6"
                            >
                                <legend
                                    className={
                                        labelStyles
                                    }
                                >
                                    Additional Services
                                </legend>

                                <p className="mt-2 text-sm leading-6 text-[#8a817b]">
                                    Select all that apply.
                                </p>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {serviceOptions
                                        .filter(
                                            (
                                                service,
                                            ) =>
                                                service.value !==
                                                serviceType,
                                        )
                                        .map(
                                            (
                                                service,
                                            ) => (
                                                <label
                                                    key={
                                                        service.value
                                                    }
                                                    className="group flex cursor-pointer items-center gap-3 rounded-sm border border-[#d8bd8c]/40 bg-[#fbf7f2]/35 px-4 py-3.5 transition hover:border-[#c5a065]/70 hover:bg-[#fbf7f2]"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="additionalServices"
                                                        value={
                                                            service.value
                                                        }
                                                        className="h-4 w-4 accent-[#c48276]"
                                                    />

                                                    <span className="text-sm font-medium text-[#655e5a] transition-colors group-hover:text-[#8f6b2d]">
                                                    {
                                                        service.label
                                                    }
                                                </span>
                                                </label>
                                            ),
                                        )}
                                </div>

                                <label className="mt-6 block">
                                <span
                                    className={
                                        labelStyles
                                    }
                                >
                                    Additional Service
                                    Details
                                </span>

                                    <textarea
                                        name="additionalServiceDetails"
                                        required
                                        rows={4}
                                        className={`${inputStyles} resize-y`}
                                        placeholder="Tell us which food option, interactive experience, marquee letters, cart rental, or other additions you are interested in."
                                    />
                                </label>
                            </motion.fieldset>
                        )}
                </div>

                {/* Additional event details */}
                <label className="mt-9 block">
                    <span
                        className={
                            labelStyles
                        }
                    >
                        Additional Event Details
                    </span>

                    <textarea
                        name="message"
                        required
                        rows={7}
                        className={`${inputStyles} resize-y`}
                        placeholder="Share the event location, theme, colors, setup requests, or any other details you would like us to know..."
                    />
                </label>

                {/* Submit */}
                <div className="mt-10 text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex w-full items-center justify-center gap-4 rounded-sm bg-[#c48276] px-8 py-[18px] text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cb7f79] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                        {isSubmitting
                            ? "Sending..."
                            : "Start Your Inquiry"}

                        {!isSubmitting && (
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={
                                    2
                                }
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 12h14M13 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>

                    {submitError && (
                        <p
                            role="alert"
                            className="mt-5 text-sm font-medium text-[#a45145]"
                        >
                            {submitError}
                        </p>
                    )}

                    <p className="mt-5 text-sm text-[#958d87]">
                        We typically respond within
                        24–48 hours.
                    </p>
                </div>
            </motion.form>
        </section>
    );
}