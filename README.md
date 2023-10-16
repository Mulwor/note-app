### Здесь находится различный стек разделенные на разные темы:

#### Basic

- Storybook

1. Для того, чтобы запустить storybook надо написать: npm run storybook.
2. В данном гитхабе расмотрены следующие темы:
- Get startedhttps://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)

  &__form {
    &_shadow {
      padding: kit.$ds-elements-spacing-gap-x2 kit.$ds-elements-spacing-gap-x3;
      background-color: kit.$ds-day-base-static-bg-stroke-30;
      gap: kit.$ds-elements-spacing-gap-x1;

      .Tabs__trigger {
        &[data-state='active']{
          color: kit.$ds-night-primary-accent-white-default;
          background-color: kit.$ds-day-base-static-text-icons-0;

          path {
            fill: kit.$ds-day-base-static-text-icons-90;
          }
        }
      }
        
      &[data-orientation='vertical'] {
        .Tabs__trigger {
          &[data-state='active']{
            background-color: black;
            color: bisque;
          }
        }
      }
    }
      

    &_primary {
      padding: kit.$ds-elements-spacing-gap-x2 kit.$ds-elements-spacing-gap-x3;
      box-shadow: kit.$ds-elements-shadow-10;
      gap: kit.$ds-elements-spacing-gap-x1;

      .Tabs__trigger {
        &[data-state='active']{
          color: kit.$ds-night-primary-accent-white-default;
          background-color: kit.$ds-day-base-static-text-icons-0;

          path {
            fill: kit.$ds-day-base-static-text-icons-90;
          }
        }
      }
    }

    &_secondary {
      padding: kit.$ds-elements-spacing-gap-x2 kit.$ds-elements-spacing-gap-x3;
      box-shadow: kit.$ds-elements-shadow-10;
      border-radius: kit.$ds-border-radius-x1;
      gap: kit.$ds-elements-spacing-gap-x1;

      .Tabs__trigger {
        border-radius: kit.$ds-border-radius-x1;

        &[data-state='active']{
          color: kit.$ds-night-primary-accent-white-default;
          background-color: kit.$ds-day-base-static-text-icons-0;

          path {
            fill: kit.$ds-day-base-static-text-icons-90;
          }
        }
      }
    }

    &_transparent {
      padding: kit.$ds-elements-spacing-gap-x2 kit.$ds-elements-spacing-gap-x3;
      box-shadow: kit.$ds-elements-shadow-10;
      border-radius: 32px;
      gap: kit.$ds-elements-spacing-gap-x1;

      .Tabs__trigger {
        border-radius: 32px;
        
        &[data-state='active']{
          color: kit.$ds-night-primary-accent-white-default;
          background-color: kit.$ds-day-base-static-text-icons-0;

          path {
            fill: kit.$ds-day-base-static-text-icons-90;
          }
        }
      }
    }
  }
