"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import z from "zod";

import ImageUpload from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants/fields";
import { useToast } from "@/hooks/use-toast";

type AuthForm<T extends FieldValues> = {
  type: "sign-in" | "sign-up";
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
};

const SignUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  universityId: z.coerce.number(),
  universityCards: z.string().nonempty("University Card Is Required"),
  password: z.string().min(6),
});

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const AuthForm = <T extends FieldValues>({
  type,
  defaultValues,
  onSubmit,
}: AuthForm<T>) => {
  const { toast } = useToast();
  const router = useRouter();

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(type === "sign-in" ? SignInSchema : SignUpSchema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const isSignIn = type === "sign-in";

  const handleSubmit: SubmitHandler<T> = async (values) => {
    const result = await onSubmit(values);

    if (result.success) {
      toast({
        title: "Success",
        description: isSignIn
          ? "You have successfully signed in."
          : "You have successfully signed up.",
      });

      router.push("/");
    } else {
      toast({
        title: `Error ${isSignIn ? "signing in" : "signing up"}`,
        description: result.error ?? "An error occurred.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-4"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="capitalize text-neutral-300">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === "universityCard" ? (
                      <ImageUpload onFileChange={field.onChange} />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className="w-full border-none bg-neutral-800 text-white"
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            className="h-10 w-full bg-palette-secondary text-white hover:bg-palette-secondary/80"
            type="submit"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
