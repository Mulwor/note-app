import { useState, useTransition } from 'react';

async function sendComment(text) {
  // Имитация запроса к серверу
  await new Promise(resolve => setTimeout(resolve, 1500));
  return { id: Date.now(), text };
}

export default function CommentForm() {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = () => {
    startTransition(async () => {
      const newComment = await sendComment(text);
      setComments(prev => [...prev, newComment]);
      setText('');
    });
  };

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Ваш комментарий..."
        // Инпут остаётся доступным пока идёт запрос
        disabled={isPending}
      />
      <button onClick={handleSubmit} disabled={isPending}>
        {isPending ? 'Отправка...' : 'Отправить'}
      </button>

      <ul>
        {comments.map(c => <li key={c.id}>{c.text}</li>)}
      </ul>
    </div>
  );
}