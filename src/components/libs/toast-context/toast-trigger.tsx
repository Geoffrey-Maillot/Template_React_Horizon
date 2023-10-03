import { Button } from 'primereact/button';

import { useToastContext } from './toast-context';

export type Severity = 'success' | 'info' | 'warn' | 'error';

interface ToasttriggerProps {
  /**
   *Type de message
   */
  severity: Severity;
  /**
   * Header (facultatif)
   */
  summary?: string;
  /**
   * Contenu
   */
  detail: string;
}

/**
 *Exemple de bouton qui trigger l'ouverture du Toast
 */
export function ToastTrigger ({ severity, summary, detail }: ToasttriggerProps) {
  const toastContext = useToastContext();

  const displayToastMessage = () => {
    toastContext({ severity, summary, detail });
  };

  const severityButton: Record<string, string> = {
    success: 'success',
    info: 'light',
    warn: 'warning',
    error: 'danger',
  };

  return (
    <Button
      className={`p-button p-button-${severityButton[severity]}`}
      onClick={displayToastMessage}
    >
      Ouvrir le Toast
    </Button>
  );
};
