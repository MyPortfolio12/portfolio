import { Space_Grotesk, Fira_Code, DM_Sans } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
})

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
})

const mono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
})

export const metadata = {
  title: 'Vinod Kumar Aluru — Senior Agentic AI Engineer',
  description:
    'Senior Agentic AI Engineer with 10+ years of experience in LLM orchestration, RAG architectures, and autonomous AI agents across financial services, healthcare, and government.',
  keywords: [
    'Agentic AI', 'LangChain', 'LangGraph', 'RAG', 'LLM', 'Azure OpenAI',
    'AWS Bedrock', 'GCP', 'GenAI Engineer', 'AI Engineer',
  ],
  openGraph: {
    title: 'Vinod Kumar Aluru — Senior Agentic AI Engineer',
    description: 'Building autonomous AI systems that power enterprise intelligence.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  )
}
