import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './Assets/Style/main.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

createRoot(document.getElementById('root')!).render(<App />);
