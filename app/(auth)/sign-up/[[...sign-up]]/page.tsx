import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp signInFallbackRedirectUrl="/onboarding" fallbackRedirectUrl="/onboarding"/>
}