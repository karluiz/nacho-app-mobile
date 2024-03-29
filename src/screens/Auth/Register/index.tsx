import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  IconButton,
  Column,
  Row,
  Text,
} from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "i18n-js";
import ToggleThemeButton from "../../../components/Buttons/ToggleThemeButton";
import Input from "../../../components/Inputs/Input";
import { AUTH_STACK_SCREENS_NAMES } from "../../../lib/constants/screens";
import { EMAIL_REGEX } from "../../../lib/constants/system";

interface IForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

function Register() {
  const { navigate } = useNavigation();
  const { handleSubmit, control, getValues } = useForm<IForm>();

  const onSubmit = (values: IForm) => {
    console.warn("values: ", values);
  };

  const onLogin = () => {
    navigate(AUTH_STACK_SCREENS_NAMES.Login);
  };

  return (
    <Center
      flex={1}
      _light={{
        backgroundColor: "gray.100",
      }}
      _dark={{
        backgroundColor: "gray.900",
      }}
    >
      <Box py={5} px={5} rounded="xl" w="80%">
        <Box safeArea p={2} w="100%" mx="auto">
          <Heading size="lg">{i18n.t("register")}</Heading>
          <Heading color="muted.400" size="xs">
            {i18n.t("registerSubtitle")}
          </Heading>

          <Column space={2} mt={5}>
            <Controller
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label={i18n.t("email")}
                  placeholder={i18n.t("emailPlaceholder")}
                  onChangeText={field.onChange}
                  leftIcon={<Ionicons name="mail" color="gray.300" />}
                  error={error && (error?.message || i18n.t("emailError"))}
                />
              )}
              name="email"
              rules={{
                required: true,
                pattern: {
                  value: EMAIL_REGEX,
                  message: i18n.t("emailInvalid"),
                },
              }}
            />

            <Controller
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label={i18n.t("password")}
                  placeholder="*********"
                  onChangeText={field.onChange}
                  leftIcon={<Ionicons name="lock-closed" color="gray.300" />}
                  error={
                    error && (error?.message || i18n.t("passwordMissingError"))
                  }
                />
              )}
              name="password"
              rules={{
                required: true,
              }}
            />

            <Controller
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label={i18n.t("passwordConfirm")}
                  placeholder="*********"
                  onChangeText={field.onChange}
                  leftIcon={<Ionicons name="lock-closed" color="gray.300" />}
                  error={
                    error && (error?.message || i18n.t("passwordConfirmError"))
                  }
                />
              )}
              name="passwordConfirm"
              rules={{
                required: true,
                validate: (v) => v === getValues("password"),
              }}
            />

            <Column space={2}>
              <Button onPress={handleSubmit(onSubmit)}>
                {i18n.t("signUp")}
              </Button>

              <Row justifyContent="center" alignItems="center">
                <IconButton
                  icon={(
                    <Icon
                      as={<MaterialCommunityIcons name="facebook" />}
                      color="muted.700"
                      size="sm"
                    />
                  )}
                />
                <IconButton
                  icon={(
                    <Icon
                      as={<MaterialCommunityIcons name="google" />}
                      color="muted.700"
                      size="sm"
                    />
                  )}
                />
                <IconButton
                  icon={(
                    <Icon
                      as={<MaterialCommunityIcons name="github" />}
                      color="muted.700"
                      size="sm"
                    />
                  )}
                />
              </Row>
            </Column>

            <Row justifyContent="center">
              <Text fontSize="sm" color="muted.700" fontWeight={400}>
                {i18n.t("gotAccount")}
                {" "}
              </Text>

              <TouchableOpacity onPress={onLogin}>
                <Text fontSize="sm" bold underline>
                  {i18n.t("signIn")}
                  {" "}
                </Text>
              </TouchableOpacity>
            </Row>
          </Column>
        </Box>
      </Box>

      <ToggleThemeButton />
    </Center>
  );
}

export default Register;
