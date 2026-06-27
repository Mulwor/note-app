import { useState, useTransition } from "react";
import { tabs, HeavyTabFunction } from "./HeavyTabFunction";

export const UseTransitionHook_02 = () => {
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState('Главная');

  const handleTabClick = (tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  return (
    <div>
      <nav>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            // Визуально подсвечиваем активную вкладку даже во время перехода
            style={{ opacity: isPending ? 0.5 : 1 }}
          >
            {tab}
          </button>
        ))}
      </nav>

      {isPending ? <p>Переключение...</p> : <HeavyTabFunction tab={activeTab} />}
    </div>
  );
}


export const UseTransitionHook_02_WithoutTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState('Главная');

  const handleTabClick = (tab) =>  setActiveTab(tab);

  return (
    <div>
      <nav>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            // Визуально подсвечиваем активную вкладку даже во время перехода
            style={{ opacity: isPending ? 0.5 : 1 }}
          >
            {tab}
          </button>
        ))}
      </nav>

      <HeavyTabFunction tab={activeTab} />
    </div>
  );
}