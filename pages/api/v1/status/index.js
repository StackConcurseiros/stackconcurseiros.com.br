function status(request, response) {
  response.status(200).json({ Stack: "Concurseiros" });
}

export default status;
