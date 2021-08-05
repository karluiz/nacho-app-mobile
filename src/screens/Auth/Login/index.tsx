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
import { AUTH_STACK_SCREENS_NAMES } from "../../../lib/constants/screen";
import { EMAIL_REGEX } from "../../../lib/constants/system";
import { useAuth } from "../../../lib/context/auth/auth.provider";

interface IForm {
  email: string;
  password: string;
  test?:   string
  testt?: number
}

const Login = () => {
  const { navigate } = useNavigation();
  const { signIn } = useAuth();
  const { handleSubmit, control } = useForm<IForm>();

  const onSubmit = (values: IForm) => {
    console.warn("values: ", values);
    signIn("token");
  };

  const onRegister = () => {
    navigate(AUTH_STACK_SCREENS_NAMES.Register);
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
          <Heading size="lg">{i18n.t("welcome")}</Heading>
          <Heading color="muted.400" size="xs">
            {i18n.t("loginSubtitle")}
          </Heading>

          <Column space={2} mt={5}>
            <Controller
              control={control}
              render={({ field, fieldState: { error } }) => (
                <Input
                  {...field}
                  label={i18n.t("email")}
                  placeholder={i18n.t("emailPlaceholder")}
                  onChangeText={(v) => field.onChange(v.replace(/\s/g, ""))}
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

            <Box
              _text={{ fontSize: "xs", fontWeight: "700" }}
              alignSelf="flex-end"
              mt={1}
            >
              {i18n.t("forgotPassword")}
            </Box>

            <Column space={2}>
              <Button onPress={handleSubmit(onSubmit)}>
                {`${i18n.t("signIn")}`}
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
                {i18n.t("registerMessage")}
                .
                {" "}
              </Text>

              <TouchableOpacity onPress={onRegister}>
                <Text fontSize="sm" bold underline>
                  {i18n.t("registerLink")}
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
};

export default Login;
