describe('Funcionalidad de llegar al pago', () => {

  it('Llegar al proceso de pago con un usuario invitado', () => {
    cy.viewport(1000, 786)
    cy.visit('https://www.exito.com/')
    cy.wait(3000)
    //Ingresar el dato al buscador
    cy.get('[data-testid="store-search-input"]').type('lavadora')
    //Dirigirse a la pagina de resultados
    cy.focused().type('{enter}')
    //Añadir al carrito el primer producto
    cy.contains('Agregar').first().click()
    cy.wait(5000)
    //Ir al carrito
    cy.get('svg[data-fs-navbar-minicart-icon="true"]').click()
    //Ir al proceso de pago
    cy.contains('button', 'Ir a pagar').click()
    //Ingresar el correo electronico
    cy.get('input[name="email"]').type('adfe@gsdg.com')
    //Confirmación del correo
    cy.contains('button', 'Confirmar').click()
    cy.wait(5000)
    //Diligenciar el formulario del usuario
    cy.get('input[name="firstName"]').clear().type('Juan')
    cy.wait(2000)
    cy.get('input[name="lastName"]').clear().type('Perez')
    cy.wait(2000)
    //cy.get('input[name="documentType"]').select('Cédula ciudadanía')
    cy.get('input[name="document"]').clear().type('1010101010')
    cy.get('input[name="phone"]').clear().type('3120456789')
    cy.get('input[data-atom-checkbox-input="true"]').eq(0).check()
    cy.get('input[data-atom-checkbox-input="true"]').eq(1).check()
    cy.get('input[data-atom-checkbox-input="true"]').eq(2).check()
    //Enviar el formulario
    cy.contains('button', 'Continuar').click()
    //Ingresar la dirección
    cy.get('select[name="state"]').select('Cundinamarca')
    cy.get('select[name="city"]').select('Soacha')
    cy.get('select[name="type"]').select('Calle')
    cy.get('input[name="mainAddress"]').type('120')
    cy.get('input[name="firstNumber"]').type('12')
    cy.get('input[name="secondNumber"]').type('12')
    cy.get('input[name="neighborhood"]').type('Los colores')
    cy.get('input[name="receiverName"]').type('Pepe Perez')
    cy.contains('button', 'Guardar').click()

  })

  it('Llegar al proceso de pago con un usuario registrado con dirección creada', () => {
    cy.viewport('ipad-2')
    cy.visit('https://www.exito.com/')
    cy.wait(3000)
    //Ingresar a la opción inicir sesión
    cy.get('[data-fs-requests="true"] > [data-testid="fs-link"]').click()
    cy.wait(2000)
    //Ingresar a la opción Inicia con email y contraseña
    cy.get(':nth-child(1) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label').click()
    //Ingresar los campos
    cy.get('.vtex-login-2-x-inputContainerEmail').type('derly123@yopmail.com')
    cy.get('.vtex-login-2-x-inputContainerPassword').type('Dios2024')
    //Enviar el formulario
    cy.get('.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label').click()
    //Ingresar el dato al buscador
    cy.get('[data-testid="store-search-input"]').type('lavadora')
    //Dirigirse a la pagina de resultados
    cy.focused().type('{enter}')
    //Añadir al carrito el primer producto
    cy.contains('Agregar').first().click()
    cy.wait(5000)
    //Ir al carrito
    cy.get('svg[data-fs-navbar-minicart-icon="true"]').click()
    cy.wait(2000)
    //Ir al proceso de pago
    cy.contains('button', 'Ir a pagar').click()
    //Diligenciar el formulario del usuario
    cy.get('input[name="firstName"]').clear().type('Derly')
    cy.wait(2000)
    cy.get('input[name="lastName"]').clear().type('Perez')
    cy.wait(2000)
    cy.get('input[name="phone"]').clear().type('3120456789')
    cy.get('input[data-atom-checkbox-input="true"]').eq(0).check()
    cy.get('input[data-atom-checkbox-input="true"]').eq(1).check()
    cy.get('input[data-atom-checkbox-input="true"]').eq(2).check()
    //Enviar el formulario
    cy.contains('button', 'Continuar').click()
    //Ingresar la dirección
    cy.get('select[name="state"]').select('Cundinamarca')
    cy.get('select[name="city"]').select('Soacha')
    cy.get('select[name="type"]').select('Calle')
    cy.get('input[name="mainAddress"]').type('120')
    cy.get('input[name="firstNumber"]').type('12')
    cy.get('input[name="secondNumber"]').type('12')
    cy.get('input[name="neighborhood"]').type('Los colores')
    cy.get('input[name="receiverName"]').type('Pepe Perez')
    cy.contains('button', 'Guardar').click()

  })

})



