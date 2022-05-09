import React from 'react'
import  './styles.sass'

const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const data = [
    {
      title: 'Pricing plans',
      paragraph
    },
    {
      title: 'How to apply',
      paragraph
    },
    {
      title: 'Purchasing process',
      paragraph
    },
    {
      title: 'Usage guides',
      paragraph
    }
  ]

export default function Accordion() {
    return (
        <div {...{ className: 'wrapper' }}>
          <ul {...{ className: 'accordion-list' }}>
            {data.map((data, key) => {
              return (
                <li {...{ className: 'accordion-list__item', key }}>
                  <AccordionItem {...data} />
                </li>
              )
            })}
          </ul>
        </div>
      )
}

class AccordionItem extends React.Component {
    state = {
      opened: false
    }
    
    render () {
      const {
        props: {
          paragraph,
          title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <h3 {...{ className: 'accordion-item__title' }}>
              {title}
            </h3>
            <span {...{ className: 'accordion-item__icon' }}/>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p {...{ className: 'accordion-item__paragraph' }}>
                  {paragraph}
                </p>
              </div>
            </div>
        </div>
      )
    }
  }
  
