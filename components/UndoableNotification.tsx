type UndoableNotification = {
    message: string;
    cancelMutation?: () => void;
    closeToast?: () => void;
};

export const UndoableNotification: React.FC<UndoableNotification> = ({
    closeToast,
    cancelMutation,
    message,
}) => {
    return (
        <div className=" bg-base-100">
            <p>{message}</p>
            <button
                onClick={() => {
                    cancelMutation?.();
                    closeToast?.();
                }}
            >
                Undo
            </button>
        </div>
    );
};