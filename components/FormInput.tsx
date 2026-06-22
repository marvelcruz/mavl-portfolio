import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';                                    // ← add this
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { formSchema } from '@/components/Contact';          // ← replace the bad import

type ContactFormValues = z.infer<typeof formSchema>;        // ← add this

interface FormInputProps {
  name: FieldPath<ContactFormValues>;
  control: Control<ContactFormValues>;
  label: string;
  placeholder: string;
}

const FormInput = ({ name, control, label, placeholder }: FormInputProps) => {
  const isMessage = name === 'message';

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col gap-2 w-full">
            <FormLabel className="form-label">{label}</FormLabel>

            <FormControl>
              {isMessage ? (
                <Textarea
                  placeholder={placeholder}
                  rows={5}
                  {...field}
                  className="form-textarea"
                  aria-label={label}
                />
              ) : (
                <Input
                  placeholder={placeholder}
                  type={name === 'email' ? 'email' : 'text'}
                  autoComplete={name === 'email' ? 'email' : 'name'}
                  {...field}
                  className="font-input"
                  aria-label={label}
                />
              )}
            </FormControl>
          </div>

          <FormMessage className="text-xs text-red-300" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;