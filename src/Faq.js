import React from 'react'

export const FAQ = () => {
    const faqs = [
        {
            question: "How do you make your doughnuts?",
            answer: "with lots of love, and a little bit of crazy"
        },
        {
            question: "can you share your recipes?",
            answer: "yes... for a million dollars"
        }
    ]
    return (
        <>
        <h1>Frequently Asked Questions</h1>
            {faqs.map((faq, i) => <div key={i}>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
                </div>)}
        </>
    )
}