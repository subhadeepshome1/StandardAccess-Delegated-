export const requiredValidator = {
    "required": "This Field Is Required"
}

export const emailValidator = {
    "pattern": {
        "value": /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "message": "Value Must Be A Valid Email ID"
    }
}

export const phoneValidator = {
    "pattern": {
        "value": /^[0-9]{10}$/,
        "message": "Value Must Be A Valid Phone Number"
    }
}

export const numberValidator = {
    "pattern": {
        "value": /^[0-9]*$/,
        "message": "Value Must Be A Number"
    }
}

export const decimalValidator = {
    "pattern": {
        "value": /^(\-){0,1}\d+(\.\d+){0,1}$/,
        "message": "Value Must Be A Decimal"
    }
}
