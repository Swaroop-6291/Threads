"use client";

import React, { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage 
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { ThreadValidation } from '@/lib/validations/thread';
import * as z from 'zod';
import { useOrganization } from '@clerk/nextjs';
import { updateUser } from '@/lib/actions/user.actions';
import { usePathname, useRouter } from 'next/navigation';
import { Textarea } from '../ui/textarea';
import { createThread } from '@/lib/actions/thread.actions';

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}


  

function PostThread({userId}:{userId:string})
{
    const router=useRouter();
    const pathname=usePathname();
    const {organization}=useOrganization()

    const form = useForm<z.infer<typeof ThreadValidation>>({
        resolver: zodResolver(ThreadValidation),
        defaultValues: {
         thread: '',
         accountId:userId
        }
    });

    async function onSubmit(values: z.infer<typeof ThreadValidation>)
    {
         await createThread({
          text:values.thread,
          author:userId,
          communityId: organization ? organization.id : null,
          path:pathname
         })

         router.push('/');
    }

    return <Form {...form}>
             <form onSubmit={form.handleSubmit(onSubmit)} className="mt-10 flex flex-col justify-start gap-10">
                <FormField
                    control={form.control}
                    name="thread"
                    render={({ field }) => (
                        <FormItem className='flex w-full flex-col gap-3'>
                        <FormLabel className='text-base-semibold text-light-2'>
                            Content
                        </FormLabel>
                        <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                            <Textarea rows={15}
                            
                            className='account-form_input no-focus'
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                </FormItem>
            )}
            />
               <Button type='submit' className='bg-primary-500'>
                Post Thread
               </Button>
             </form>
           </Form>
}

export default PostThread;