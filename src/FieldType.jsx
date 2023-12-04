function RequiredField() {
  return <span className="required-field"> *</span>;
}

function OptionalField() {
    return <span className="optional-field"> optional</span>;
}

function RecommendedField() {
    return <span className="optional-field"> recommended</span>;
}

export { RequiredField, OptionalField, RecommendedField}