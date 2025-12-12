interface QA {
  question: string
  answer: string
}

interface QASectionProps {
  title?: string
  questions: QA[]
}

export default function QASection({ title = 'Questions & Answers', questions }: QASectionProps) {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl font-bold text-[#111111] mb-6 font-display">{title}</h2>
      <div className="space-y-4">
        {questions.map((qa, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-5 border border-[#E5E0D1]"
          >
            <h3 className="text-base font-semibold text-[#C69A35] mb-2">
              {qa.question}
            </h3>
            <p className="text-[#3D3D3D] text-sm leading-relaxed">
              {qa.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
