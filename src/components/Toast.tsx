type ToastType = "success" | "error" | "info";

type ToastProps = {
  message: string;
  type?: ToastType;
  onClose: () => void;
};

export default function Toast({
  message,
  type = "info",
  onClose,
}: ToastProps) {
  return (
    <div className={`toast toast-${type}`}>
      <span className="toast-message">{message}</span>

      <button className="toast-close" onClick={onClose}>
        ×
      </button>
    </div>
  );
}