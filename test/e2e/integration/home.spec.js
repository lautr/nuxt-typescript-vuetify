describe('Sample tests', () => {
  it('Visits index page', () => {
    cy.visit('/')
    cy.contains('h1', 'NUXT + TypeScript + Vuetify')
  })

  it('increase counter', () => {
    cy.viewport(1280, 1080)

    cy.get('[type="text"]').type('10')
    cy.get('[type="button"]').click({ multiple: true })

    cy.contains('.v-alert.success div', '25')
  })
})
