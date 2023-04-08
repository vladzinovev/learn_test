import { render, screen } from '@testing-library/react';
import App from './App';

describe('TEST APP', () => {
  /* test('renders learn react link', () => {
    //компонент который будем тестировать
    render(<App />);
    //получаем элемент по тексту hello world (i-игнорируем регистр)
    const helloWorldElem = screen.getByText(/hello world/i);
    //элемент кнопка
    const btn = screen.getByRole('button')
    //элемент input
    const input = screen.getByPlaceholderText(/input value/i)

    //toBeInTheDocument появиля ли в нашем документе
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();//возвращает разметку
  }); */
  test('renders learn react link', async () => {
    //компонент который будем тестировать
    render(<App />);

// eslint-disable-next-line testing-library/no-debugging-utils
screen.debug();//возвращает разметку    

    //получаем элемент по тексту data (i-игнорируем регистр)
    const data =await screen.findByText(/data/i);

    //toBeInTheDocument появиля ли в нашем документе
    expect(data).toBeInTheDocument();
    expect(data).toHaveStyle({color: 'red'});
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();//возвращает разметку
    
  });
  
});