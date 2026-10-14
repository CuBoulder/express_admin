(function (Drupal, once) {
  const colors = ['blue', 'green', 'purple', 'pink', 'orange', 'yellow', 'red'];

  // One circle per selected color - w/ accessiblescreen reader naming
  function fillDots(select, container, className) {
    const names = [];
    container.replaceChildren();
    [...select.selectedOptions].forEach((option) => {
      if (!colors.includes(option.value)) {
        return;
      }
      const dot = document.createElement('span');
      dot.className = className + ' ' + className + '--' + option.value;
      dot.setAttribute('aria-hidden', 'true');
      container.appendChild(dot);
      names.push(option.textContent.trim());
    });
    return names;
  }

  Drupal.behaviors.expressAdminCategoryColumn = {
    attach(context) {
      // show selected circles in the Color Category summary
      once('basic-page-color-category', '.form-item--field-color-categorization select[multiple]', context).forEach((select) => {
        const details = select.closest('details');
        const summary = details ? details.querySelector(':scope > summary') : null;
        if (!details || !summary) {
          return;
        }

        details.classList.add('basic-page-color-category-details');
        const selected = document.createElement('span');
        selected.className = 'basic-page-color-category__selected';
        summary.appendChild(selected);

        const render = () => {
          fillDots(select, selected, 'basic-page-color-category__dot');
        };

        select.addEventListener('change', render);
        render();
      });

      // Content View - wrap the Category multiselect in a caret to look nice, otherwise its long
      once('category-column', '.form-item--field-color-categorization-value select[multiple]', context).forEach((select) => {
        const item = select.closest('.form-item--field-color-categorization-value');
        const label = item ? item.querySelector('label') : null;
        if (!item || !label) {
          return;
        }

        const labelText = label.textContent.trim();
        const details = document.createElement('details');
        details.className = 'category-column';

        const summary = document.createElement('summary');
        summary.className = 'category-column__toggle';

        // Screen reader name for the closed control.
        const hidden = document.createElement('span');
        hidden.className = 'visually-hidden';
        hidden.dataset.categoryLabel = labelText;
        hidden.textContent = labelText;

        const selected = document.createElement('span');
        selected.className = 'category-column__selected';

        const caret = document.createElement('span');
        caret.className = 'category-column__caret';
        caret.setAttribute('aria-hidden', 'true');

        summary.append(hidden, selected, caret);
        details.append(summary);
        label.insertAdjacentElement('afterend', details);
        details.append(select);

        const render = () => {
          const names = fillDots(select, selected, 'category-column__dot');
          hidden.textContent = names.length ? labelText + ': ' + names.join(', ') : labelText;
        };

        select.addEventListener('change', render);
        render();
      });
    },
  };
})(Drupal, once);
