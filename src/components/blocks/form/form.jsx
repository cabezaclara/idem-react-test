import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Input, Label } from "../../styled";
import { AppRoute } from "../../../const";
import Button from "../../ui/button/button";
import Checkbox from "../../ui/checkbox/checkbox";
import RadioButton from "../../ui/radio-button/radio-button";
import FileInput from "../../ui/file-input/file-input";
import {StyledForm, 
  Field, 
  Select, 
  Text, 
  SmallText, 
  FieldGroup, 
  Textarea, 
  RadioGroup, 
  RadioButtonLabel, 
  Error,
  CorrectField,
  LabelTitle,
  TitleCapcha,
  StyledCaptcha} from "./styles";

const gender = ['мужской', 'женский'];

function Form() {
  const { register, handleSubmit, formState: { errors, isValid, dirtyFields } } = useForm({
    mode: "all"
  });
  const [type, setType] = useState("text");
  
  const [selectGender, setSelectGender] = useState(gender[0]);

  const onSubmit = data => {
    window.open (AppRoute.THANKS, '_self', false);
    console.log("Submit", data);
  };
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(true);


    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <Label>
            <LabelTitle>Вакансия *
            {!errors.vacancy && dirtyFields.vacancy && <CorrectField /> }
            </LabelTitle>
            <Select 
              {...register("vacancy", 
              { required: true })} 
              style={{ 
                color: isActive ? 'black' : 'rgba(0,0,0,0.3)',  
                backgroundColor: errors.vacancy && "rgba(255,102,102,0.3)" }} 
              onClick={handleClick} 
              >
                <option value="" selected disabled hidden>товаровед</option>
                <option value="merchandiser">товаровед</option>
                <option value="driver">водитель</option>
                <option value="cook">пекарь</option>
                <option value="cashier">кассир</option>
            </Select>
          </Label>
          {errors.vacancy && <Error>выберите, пожалуйста, вакансию</Error>}
        </Field>
        <Field>
          <Label>
            <LabelTitle>ФИО *
              {!errors.name && dirtyFields.name && <CorrectField /> }
            </LabelTitle>
            <Input type="text" {...register("name", { required: true, minLength: 3})} style={{ backgroundColor: errors.name && "rgba(255,102,102,0.3)" }} />
          </Label>
          {errors.name && errors.name.type === "required" && <Error>заполните, пожалуйста, это поле</Error>}
          {errors.name && errors.name.type === "minLength" && <Error>поле не заполнено до конца</Error>}
        </Field>
        <FieldGroup>
          <Field>
            <Label>
              <LabelTitle>
                Дата рождения *
                {!errors.dateOfBirth && dirtyFields.dateOfBirth && <CorrectField /> }
              </LabelTitle>
                <Input 
                  type={type}
                  placeholder="28.07.2002" 
                  onFocus={() => setType('date')}
                  {...register("dateOfBirth", { required: true})}
                  style={{ backgroundColor: errors.dateOfBirth && "rgba(255,102,102,0.3)" }}
                />
            </Label>
            {errors.dateOfBirth && <Error>заполните, пожалуйста, это поле</Error>}
          </Field>
          <Field>
            <Text>Пол</Text>
            <RadioGroup>
              {gender && gender.length &&
                gender.map((item, index) => (
                  <RadioButton
                    labelComponent={RadioButtonLabel}
                    selectValue={selectGender}
                    key={index}
                    value={item}
                    text={item}
                    {...register("gender")}
                    onChange={(el) => {
                      setSelectGender(el.target.value);
                  }} />
                ))
              }
            </RadioGroup>
          </Field>
          <Field>
            <Label>
              <LabelTitle>
                Контактый телефон *
                {!errors.tel && dirtyFields.tel && <CorrectField /> }
              </LabelTitle>
              <Input 
                type="tel" 
                placeholder="+7 ("
                {...register("tel", { required: true, minLength: 10 })} style={{ backgroundColor: errors.tel && "rgba(255,102,102,0.3)" }} 
                />
            </Label>
            {errors.tel && errors.tel.type === "required" && <Error>заполните, пожалуйста, это поле</Error>}
            {errors.tel && errors.tel.type === "minLength" && <Error>поле не заполнено до конца</Error>}
          </Field>
          <Field>
            <Label>
              <LabelTitle>
                Электронная почта *
                {!errors.email && dirtyFields.email && <CorrectField /> }
              </LabelTitle>
              <Input 
                placeholder="example@mail.com" 
                type="email"
                {...register("email", 
                { 
                  required: true,  
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                })}
                style={{ backgroundColor: errors.email && "rgba(255,102,102,0.3)" }} 
              />
            </Label>
            {errors.email && errors.email.type === "required" && <Error>заполните, пожалуйста, это поле</Error>}
            {errors.email && errors.email.type === "pattern" && <Error>поле заполнено некорректно</Error>}
          </Field>
        </FieldGroup>
        <Field>
          <Label>Резюме
            <Textarea {...register("resume")}></Textarea>
          </Label>
          <FileInput {...register("file")} />
        </Field>
        <FieldGroup>
          <Field>
            <TitleCapcha>Капча</TitleCapcha>
            <StyledCaptcha>
            <Checkbox
                defaultChecked={false}
                text={"я не робот"} 
                {...register("capcha", {validate: (value) => value === "true"})}
            />
            </StyledCaptcha>
            {errors.capcha && <Error>это поле обязательно</Error>}
          </Field>
          <SmallText>* поля для обязательного заполнения</SmallText>
        </FieldGroup>
        <Field>
          <Checkbox
            isFilling   
            defaultChecked={true}
            text={"я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения обращений *"}  
            {...register("agreeСheck", {validate: (value) => value === "true"})}
          />
          {errors.agreeСheck && <Error>это поле обязательно</Error>}
        </Field>
        <Button type="submit" style={{ backgroundColor: isValid ? '#FFDF31' : '#F5F5F5' }}>отправить</Button>
      </StyledForm>
    )
};

export default Form;