"use client";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

function Error(props: Props) {
  const { error, reset } = props;
  return (
    <div>
      <h2>에러 발생</h2>
      <p>{error.message}</p>
      <button
        onClick={() => {
          reset();
        }}
      >
        다시 시도
      </button>
      {error.digest && <p>Digest: {error.digest}</p>}
    </div>
  );
}

export default Error;
