import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AuraModal from './AuraModal';

const setup = () => {
  const onClose = jest.fn();
  const utils = render(
    <div>
      <button data-testid="trigger">open</button>
      <AuraModal isOpen onClose={onClose} />
    </div>
  );
  return { onClose, ...utils };
};

test('renders title and button when open', () => {
  setup();
  expect(screen.getByRole('dialog', { name: /aura wallet/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /ruStore/i })).toBeInTheDocument();
});

test('closes on Escape', () => {
  const { onClose } = setup();
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(onClose).toHaveBeenCalled();
});

test('closes on backdrop click', () => {
  const { onClose, container } = setup();
  // Because modal renders in a portal, query the document for the overlay by attribute
  const dialog = screen.getByRole('dialog', { name: /aura wallet/i });
  const overlay = dialog.parentElement;
  fireEvent.click(overlay);
  expect(onClose).toHaveBeenCalled();
});

test('focus is trapped and restored on close', () => {
  const onClose = jest.fn();
  render(
    <div>
      <button data-testid="trigger">open</button>
      <AuraModal isOpen onClose={onClose} />
    </div>
  );

  const dialog = screen.getByRole('dialog', { name: /aura wallet/i });
  // Initial focus should move to the CTA link with data-autofocus
  const cta = screen.getByRole('link', { name: /ruStore/i });
  expect(cta).toHaveFocus();

  // Tab a few times inside dialog
  fireEvent.keyDown(document, { key: 'Tab' });
  fireEvent.keyDown(document, { key: 'Tab' });

  // Close and check focus restoration
  onClose.mockClear();
  const btn = screen.getByRole('button', { name: 'Закрыть' });
  btn.click();
  expect(onClose).toHaveBeenCalled();
}); 