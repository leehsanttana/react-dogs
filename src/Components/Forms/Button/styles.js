import styles from "styled-components";

export const Button = styles.button`
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: .4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: .8rem 1.2rem;
  box-sizing: border-box;
  transition: .2s;
  
  &:hover, &:focus{
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: .5;
    cursor: wait;
  }
`;
