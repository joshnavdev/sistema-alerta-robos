<template>
  <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <GridLayout class="login">
        <StackLayout ref="initialContainer" class="initial-container">
            <Label text="SafeCity" class="initial-label"></Label>
            <StackLayout class="initial-button">
                <Label text="Welcome" class="initial-button-label"></Label>
            </StackLayout>
        </StackLayout>
        <StackLayout ref="mainContainer" class="main-container" >
            <GridLayout ref="formControls" class="form-controls" rows="auto, auto">
                <TextField
                    hint="Email Address"
                    keyboardType="email"
                    autocorrect="false"
                    autocapitalizationType="none"
                    row="0"></TextField>
                <TextField ref="password"
                    hint="Password"
                    secure="true"
                    row="1"></TextField>

                <ActivityIndicator rowSpan="2"></ActivityIndicator>
            </GridLayout>
            <Button
                text="Iniciar Sesion"
                class="submit-button"
            ></Button>

            <Label
                class="forgot-password-label"
                text="Recuperar contraseña"
            ></Label>

            <StackLayout ref="signUpStack" class="sign-up-stack" translateY="50">
                <Label text=    "Registrate"></Label>
            </StackLayout>
        </StackLayout>
    </GridLayout>
  </Page>
</template>


<style lang="scss">
.login {
  background-color: rgba(0, 0, 0, 0.9);
}

.login {
  .initial-container {
    margin-top: 150;
  }
  .initial-label {
    color: #66a59a;
    horizontal-align: center;
    margin-bottom: 10;
    font-size: 32;
  }
  .initial-button {
    background-color: rgb(220, 220, 220);
    color: #66a59a;
    height: 45;
    width: 275;
    border-radius: 10;
    vertical-align: center;
  }
  .initial-button-label {
    horizontal-align: center;
    font-weight: bold;
  }
  .main-container {
    margin-top: 300;
    width: 300;
  }
  .main-label {
    color: #131426;
    font-size: 32;
    margin-top: 45;
    margin-bottom: 52;
    letter-spacing: 0.2;
  }
  TextField {
    background-color: rgb(220, 220, 220);
    border-width: 1;
    border-color: #131426;
    color: #131426;
    height: 40;
    border-radius: 10;
    margin-bottom: 20;
    &.light {
      border-color: #c4afb4;
    }
  }
  .submit-button {
    background-color: rgb(220, 220, 220);
    color: #66a59a;
    height: 40;
  }
  .main-container {
    width: 275;
    height: 394;
  }
  .main-label {
    font-size: 28;
    margin-top: 42;
    margin-bottom: 32;
    letter-spacing: 0.3;
  }
  .sign-up-stack label {
    text-transform: uppercase;
    color: #66a59a;
  }
  .forgot-password-label {
    margin-top: 20;
    font-size: 15;
    text-transform: uppercase;
    color: #66a59a;
  }
}
.platform-android .login {
  .main-container {
    width: 275;
    height: 394;
  }
  .main-label {
    font-size: 28;
    margin-top: 42;
    margin-bottom: 32;
    letter-spacing: 0.3;
  }
  
}
</style>