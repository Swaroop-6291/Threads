"use client"
import { SignIn,useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  /*const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      router.push('/onboarding');
    }
  }, [isSignedIn, router])*/;
  return <SignIn fallbackRedirectUrl="/" signUpFallbackRedirectUrl="/onboarding" />
  } 
