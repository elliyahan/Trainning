import './App.css';
import Plus from './components/Plus';

function App() {
  return (
    <div className="App">
        <Plus />
    </div>
  );
}

export default App;

/* 외형적으로 변화는 없으나
성능을 위해 사용하는 hook : useCallback */